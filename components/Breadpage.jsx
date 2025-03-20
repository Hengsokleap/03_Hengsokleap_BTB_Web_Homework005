"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
function Breadpage({ data, category, type }) {
  return (
    < div className="w-[95%]">
      {type === "cartoon" ? (
        <Breadcrumbs>
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/cartoon">
            {category.payload.cartoon_genre}
          </BreadcrumbItem>
          <BreadcrumbItem className="text-red-500">{data.payload.ct_title}</BreadcrumbItem>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs >
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/books">
            {category.payload.book_cate_name}
          </BreadcrumbItem>
          <BreadcrumbItem className="text-red-500">{data.payload.book_title}</BreadcrumbItem>
        </Breadcrumbs>
      )}
    </div>
  );
}

export default Breadpage;
