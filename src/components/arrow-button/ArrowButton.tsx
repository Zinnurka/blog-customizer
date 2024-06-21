import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import cn from 'classnames';
import { FC } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface ArrowButtonProps {
	onClick?: OnClick;
	isActive?: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, isActive }) => {
	const container = isActive ? styles.container_open : styles.container;
	const arrowIcon = isActive ? styles.arrow_open : styles.arrow;
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму'
			tabIndex={0}
			className={cn(styles.container, container)}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={cn(styles.arrow, arrowIcon)}
			/>
		</div>
	);
};
