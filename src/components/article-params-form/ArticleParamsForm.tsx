import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import cn from 'classnames';
import styles from './ArticleParamsForm.module.scss';
import { useState, useRef, useEffect } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	ArticleParamsFormProps,
} from 'src/constants/articleProps';
import { Select } from '../select/Select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Text } from '../text/Text';

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleArrowButtonClick = () => {
		setIsFormOpen((prevState) => !prevState);
	};
	const formRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!isFormOpen) return;
		const closeForm = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsFormOpen(false);
			}
		};
		document.body.addEventListener('mousedown', closeForm);
		return () => {
			document.body.removeEventListener('mousedown', closeForm);
		};
	});

	const container = isFormOpen ? styles.container_open : styles.container;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmitClick();
	};

	return (
		<>
			<ArrowButton onClick={handleArrowButtonClick} isActive={isFormOpen} />
			<aside className={cn(styles.container, container)} ref={formRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={props.font}
						options={fontFamilyOptions}
						onChange={props.setFont}
						title='шрифт'
					/>
					<RadioGroup
						name='radioFonts'
						options={fontSizeOptions}
						selected={props.fontSize}
						title='размер шрифта'
						onChange={props.setFontSize}
					/>
					<Select
						selected={props.fontColor}
						options={fontColors}
						onChange={props.setFontColor}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={props.bgColor}
						options={backgroundColors}
						onChange={props.setBgColor}
						title='цвет фона'
					/>
					<Select
						selected={props.contentWidth}
						options={contentWidthArr}
						onChange={props.setContentWidth}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={props.onResetClick}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
