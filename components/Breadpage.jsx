"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
function Breadpage({ data, category, type }) {
  return (
    <>
      {type === "cartoon" ? (
        <Breadcrumbs>
          <BreadcrumbItem href="/dashboard">dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/cartoon">
            {category.payload.cartoon_genre}
          </BreadcrumbItem>
          <BreadcrumbItem>{data.payload.ct_title}</BreadcrumbItem>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs >
          <BreadcrumbItem href="/dashboard">dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/books">
            {category.payload.book_cate_name}
          </BreadcrumbItem>
          <BreadcrumbItem>{data.payload.book_title}</BreadcrumbItem>
        </Breadcrumbs>
      )}
    </>
  );
}

export default Breadpage;
