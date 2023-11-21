"use client";
import { Popconfirm } from "antd";
import { Table } from "antd";
import axios from "axios";
import { Badge, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaRegEdit, FaEyeSlash, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function BlogList({ data }) {
  const router = useRouter();
  const handleEdit = (slug) => {
    router.push(`/dashboard/blogs/${slug}`);
  };
  const onDelete = async (record) => {
    try {
      const result = await axios.delete("/api/dashboard/blog", {
        data: {
          id: record.id,
        },
      });
      if (result.data.status === "success") {
        toast.success("Blog Create Successfully");
        router.refresh();
      } else {
        toast.error(result.data.data);
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };
  const cancel = (e) => {};
  const handlePublished = async (record) => {
    try {
      const result = await axios.put("/api/dashboard/blog", {
        slug: record.slug,
        published: !record.published,
      });
      if (result.data.status === "success") {
        toast.success("Blog Create Successfully");
        router.refresh();
      } else {
        toast.error(result.data.data);
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };
  const columns = [
    {
      title: "ID",
      key: "id",
      render: function (record) {
        return <p>{record.id}</p>;
      },
    },
    {
      title: "Title",
      key: "title",
      render: function (record) {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Slug",
      key: "slug",
      render: function (record) {
        return <p>{record.slug}</p>;
      },
    },
    {
      title: "Published",

      render: function (record) {
        return (
          <div className="flex">
            {record.published ? (
              <Badge color="success">Published</Badge>
            ) : (
              <Badge color="warning">Not Published</Badge>
            )}
          </div>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (record) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <Button.Group>
              <Button
                onClick={() => handleEdit(record.slug)}
                size={"sm"}
                color="blue"
              >
                <FaRegEdit />
              </Button>

              <Button
                onClick={() => handlePublished(record)}
                size={"sm"}
                color="warning"
              >
                {record.published ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </Button.Group>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this Blog?"
              onConfirm={() => onDelete(record)}
              onCancel={cancel}
              cancelText="No"
              okType="default"
            >
              <Button size={"sm"} color="failure">
                <MdDelete />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return <Table scroll={{ x: 400 }} dataSource={data} columns={columns} />;
}
