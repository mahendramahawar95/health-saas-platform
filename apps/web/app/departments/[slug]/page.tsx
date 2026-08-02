import { notFound } from "next/navigation";
import { departments, getDepartmentBySlug } from "@/src/data/departments";
import DepartmentDetails from "@/components/sections/department-details/department-details";

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) return {};

  return {
    title: `${department.name} | Departments`,
    description: department.description,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  return <DepartmentDetails department={department} />;
}
