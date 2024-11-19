/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./Card";
import style from "./Card.module.css";
import Carousel from "../cardCarousel/Carousel";
import FilterButtons from "../Sections/Songs/FilterButtons";

const CardGrid = ({
	albumData,
	gridTitle,
	showBtn,
	handleShowBtn,
	genreList,
	setGenre,
}) => {
	// console.log(albumData);

	if (showBtn) {
		return (
			<div className={style.wrapper}>
				<section className={style.grid_container}>
					<article className={style.albumTitleWrapper}>
						<h1>{gridTitle}</h1>

						{gridTitle !== "Songs" ? (
							<h1
								style={{ color: "var(--color-primary)", cursor: "pointer" }}
								onClick={() => handleShowBtn(false)}>
								Show All
							</h1>
						) : (
							<></>
						)}
					</article>

					{gridTitle === "Songs" ? (
						<FilterButtons genreList={genreList} setGenre={setGenre} />
					) : (
						<></>
					)}

					<Carousel albumData={albumData} inputComponent={<Card />} />
				</section>
			</div>
		);
	}

	return (
		<div className={style.wrapper}>
			<section className={style.grid_container}>
				<article className={style.albumTitleWrapper}>
					<h1>{gridTitle}</h1>
					<h1
						style={{ color: "var(--color-primary)", cursor: "pointer" }}
						onClick={() => handleShowBtn(true)}>
						Collapse
					</h1>
				</article>
				<article className={style.cards_container}>
					{albumData?.map((item) => (
						<Card key={item.id} item={item} cardType="album" />
					))}
				</article>
			</section>
		</div>
	);
};

export default CardGrid;
