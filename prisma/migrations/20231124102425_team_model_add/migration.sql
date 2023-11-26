-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `profile_image_url` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `facebook_url` VARCHAR(255) NOT NULL,
    `twitter_url` VARCHAR(255) NOT NULL,
    `linkedIn_url` VARCHAR(255) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
