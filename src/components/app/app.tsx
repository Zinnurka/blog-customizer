import { CSSProperties, useState } from 'react';
import {
	defaultArticleState as df,
	OptionType,
} from 'src/constants/articleProps';
import clsx from 'clsx';
import styles from 'src/styles/index.module.scss';
import { ArticleParamsForm } from 'components/article-params-form';
import { Article } from 'components/article';

export const App = () => {
	const [fontSelectState, setFontSelectState] = useState<OptionType>(
		df.fontFamilyOption
	);
	const [fontSizeSelectState, setFontSizeSelectState] = useState<OptionType>(
		df.fontSizeOption
	);
	const [fontColorSelectState, setFontColorSelectState] = useState<OptionType>(
		df.fontColor
	);
	const [backgroundColorSelectState, setBackgroundColorSelectState] =
		useState<OptionType>(df.backgroundColor);
	const [contentWidthSelectState, setContentWidthSelectState] =
		useState<OptionType>(df.contentWidth);

	const [currentArticleState, setCurrentArticleState] = useState({
		fontFamilyOption: df.fontFamilyOption.value,
		fontSize: df.fontSizeOption.value,
		fontColor: df.fontColor.value,
		backgroundColor: df.backgroundColor.value,
		contentWidth: df.contentWidth.value,
	});

	const handleResetForm = () => {
		setFontSelectState(df.fontFamilyOption);
		setFontSizeSelectState(df.fontSizeOption);
		setFontColorSelectState(df.fontColor);
		setBackgroundColorSelectState(df.backgroundColor);
		setContentWidthSelectState(df.contentWidth);

		setCurrentArticleState({
			fontFamilyOption: df.fontFamilyOption.value,
			fontSize: df.fontSizeOption.value,
			fontColor: df.fontColor.value,
			backgroundColor: df.backgroundColor.value,
			contentWidth: df.contentWidth.value,
		});
	};

	const handleFormSubmit = () => {
		setCurrentArticleState({
			fontFamilyOption: fontSelectState.value,
			fontSize: fontSizeSelectState.value,
			fontColor: fontColorSelectState.value,
			backgroundColor: backgroundColorSelectState.value,
			contentWidth: contentWidthSelectState.value,
		});
	};
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentArticleState.fontFamilyOption,
					'--font-size': currentArticleState.fontSize,
					'--font-color': currentArticleState.fontColor,
					'--container-width': currentArticleState.contentWidth,
					'--bg-color': currentArticleState.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				font={fontSelectState}
				setFont={setFontSelectState}
				fontSize={fontSizeSelectState}
				setFontSize={setFontSizeSelectState}
				fontColor={fontColorSelectState}
				setFontColor={setFontColorSelectState}
				bgColor={backgroundColorSelectState}
				setBgColor={setBackgroundColorSelectState}
				contentWidth={contentWidthSelectState}
				setContentWidth={setContentWidthSelectState}
				onResetClick={handleResetForm}
				onSubmitClick={handleFormSubmit}
			/>
			<Article />
		</div>
	);
};
