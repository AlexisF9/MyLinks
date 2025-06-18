"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// SERVER ACTIONS

export const editLink = async (id: string, name: string, note: string) => {
    await prisma.link.update({
      where: {
        id,
      },
      data: {
        name,
        note
      }
    });

    revalidatePath("/dashboard");
}

export const deleteLink = async (id: string) => {
    await prisma.link.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");
}