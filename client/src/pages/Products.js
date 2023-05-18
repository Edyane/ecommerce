import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
	const { id } = useParams();

	//get products based on category id
	const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
	return (
		<div className="mb-16 pt-40 lg:pt-0">
			<div className="container mx-auto">
				<div className="flex gap-x-[30px]">
					<CategoryNav />
					<main>
						<div>title</div>

						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
							{data?.map(product => {
							return <Product product={product} key={product.id} />
							})}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Products;