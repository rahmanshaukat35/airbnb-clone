'use client';
import React, { useState, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);
	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={() => {}}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbn your home
				</div>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition'
				>
					<AiOutlineMenu />
					<div>
						<Avatar />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='absolute rounded-xl shadow-sm w-[40vw] md:w-3/4 bg-white overflow-hidden right-o top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						<>
							<MenuItem onClick={() => {}} label='Login' />
							<MenuItem onClick={() => {}} label='Sign up' />
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
