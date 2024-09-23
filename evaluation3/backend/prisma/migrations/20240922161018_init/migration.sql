-- CreateTable
CREATE TABLE `School` (
    `school_id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_name` VARCHAR(191) NOT NULL,
    `school_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `admin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `admin_name` VARCHAR(191) NOT NULL,
    `admin_email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `school_id` INTEGER NOT NULL,

    UNIQUE INDEX `Admin_admin_email_key`(`admin_email`),
    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_school_id_fkey` FOREIGN KEY (`school_id`) REFERENCES `School`(`school_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
