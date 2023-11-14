"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export default function PinVerifyForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`/api/user/recover`, {
        otp: data.pin,
        email: email,
      });
      if (res.data.status === "success") {
        toast.success(res.data.data);
        router.push(`/user/passwordReset?email=${email}`);
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            className="h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify Your Pin
          </h2>
        </div>

        <div className="mt-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  6 Digit Pin
                </label>
                <div className="mt-2">
                  <input
                    name="pin"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("pin", {
                      required: "pin is required",
                    })}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
