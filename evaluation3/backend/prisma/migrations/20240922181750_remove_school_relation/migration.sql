/*
  Warnings:

  - You are about to drop the column `school_id` on the `admin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_school_id_fkey`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `school_id`;
