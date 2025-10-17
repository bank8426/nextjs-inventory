"use server";
import z from "zod";
import { getCurrentUser } from "../auth";
import prisma from "../prisma";
import { redirect } from "next/navigation";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Proce must be non-negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const productId = String(formData.get("id") || "");

  // TODO handle batch delete
  await prisma.product.deleteMany({
    where: { id: productId, userId: user.id },
  });
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();
  // validate
  const parsedData = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsedData.success) {
    console.log(parsedData.error.issues);

    throw new Error("Validation failed");
  }

  let result = null;
  try {
    console.log(parsedData.data);

    result = await prisma.product.create({
      data: { ...parsedData.data, userId: user.id },
    });
  } catch (error) {
    console.log(error);

    throw new Error("Failed to create product");
  } finally {
    console.log(result);

    if (result) redirect("/inventory");
  }
}
