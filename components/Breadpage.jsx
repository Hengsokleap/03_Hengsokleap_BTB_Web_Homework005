"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
function Breadpage({ data, category, type }) {
  return (
    < div className="w-[95%] m-auto mt-2">
      {type === "cartoon" ? (
        <Breadcrumbs>
          <BreadcrumbItem href="/dashboard">DASHBOARD</BreadcrumbItem>
          <BreadcrumbItem href={`/cartoon?catId=${category.payload.id}`}>
            {category.payload.cartoon_genre}
          </BreadcrumbItem>
          <BreadcrumbItem className="text-red-500">{data.payload.ct_title}</BreadcrumbItem>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs >
          <BreadcrumbItem href="/dashboard">DASHBOARD</BreadcrumbItem>
          <BreadcrumbItem href={`/books?catId=${category.payload.id}`}>
            {category.payload.book_cate_name}
          </BreadcrumbItem>
          <BreadcrumbItem className="text-red-500">{data.payload.book_title}</BreadcrumbItem>
        </Breadcrumbs>
      )}
    </div>
  );
}

export default Breadpage;
