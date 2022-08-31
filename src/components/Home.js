import React from 'react';
import { ReactComponent as FistIcon } from '../assets/sports_mma-24px.svg';
import '../style/Home.css';

const Home = () => {
	return (
		<>
			<div className='fighter-background'>
				<div className='logo'>
					<h1>MMA MATCH APP</h1>
					<div className='icon-box'>
						<FistIcon className='icon' />
					</div>
				</div>
			</div>
			<footer>
				<p className='footer-text'>
					Designed and Created by Greg Burdick 2022
				</p>
				<div className='link-button-container'>
					<div className='link-button'>
						<a
							aria-label='link to github profile'
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/Gregburdick1024'>
							<i className='link-button fa fa-github-square fa-lg'></i>
						</a>
					</div>
					<div className='link-button'>
						<a
							aria-label='link to email address'
							target='_blank'
							rel='noopener noreferrer'
							href='mailto:gregrburdick@protonmail.com'>
							<i className='link-button fa fa-envelope-square fa-lg'></i>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Home;
