import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import '../style/Fighters.css';
import { useLocation } from 'react-router-dom';
import NameTable from '../components/NameTable';
import Checkbox from '../components/Checkbox';
import fighterService from '../services/fighter-service';

const Fighters = ({ selectFighter, isFavorite, active, setActive }) => {
	const [filter, setFilter] = useState('');
	const [fighters, setFighters] = useState([]);
	const [weightClasses, setWeightClasses] = useState([
		{ weight: 'Flyweight', show: true },
		{ weight: 'Bantamweight', show: true },
		{ weight: 'Featherweight', show: true },
		{ weight: 'Lightweight', show: true },
		{ weight: 'Welterweight', show: true },
		{ weight: 'Middleweight', show: true },
		{ weight: 'Light-heavyweight', show: true },
		{ weight: 'Heavyweight', show: true },
	]);

	let location = useLocation();

	useEffect(() => {
		fighterService.getAll().then((fightersArr) => {
			let flwArr = [];
			let bwArr = [];
			let fwArr = [];
			let lwArr = [];
			let mwArr = [];
			let wwArr = [];
			let lhwArr = [];
			let hwArr = [];

			fightersArr.forEach((fighter) => {
				switch (fighter.weight) {
					case 'flyweight':
						flwArr.push(fighter);
						break;
					case 'bantamweight':
						bwArr.push(fighter);
						break;
					case 'featherweight':
						fwArr.push(fighter);
						break;
					case 'lightweight':
						lwArr.push(fighter);
						break;
					case 'welterweight':
						wwArr.push(fighter);
						break;
					case 'middleweight':
						mwArr.push(fighter);
						break;
					case 'light-heavyweight':
						lhwArr.push(fighter);
						break;
					default:
						hwArr.push(fighter);
						break;
				}
			});
			setFighters([
				flwArr,
				bwArr,
				fwArr,
				lwArr,
				wwArr,
				mwArr,
				lhwArr,
				hwArr,
			]);
		});
	}, []);

	const handleChange = (e) => {
		setWeightClasses(
			weightClasses.map((w) =>
				w.weight !== e.target.id ? w : { ...w, show: !w.show }
			)
		);
	};

	if (!fighters) {
		return <div>Loading...</div>;
	}
	return (
		<div className='page-container'>
			<h1 className='page-title'>Find Your Fighter</h1>
			<Form className='fighters-form' inline>
				<FormControl
					type='text'
					onChange={({ target }) => setFilter(target.value)}
					placeholder='Filter by name'
					className='mr-sm-2'
				/>
				<div className='checkbox-container'>
					{weightClasses.map((w, index) => (
						<Checkbox
							key={index}
							index={index}
							weight={w.weight}
							handleChange={handleChange}
						/>
					))}
				</div>
			</Form>
			<div className='fighters-list-container'>
				{fighters.map((nameList, index) => (
					<NameTable
						index={index}
						key={index}
						nameList={nameList}
						location={location}
						selectFighter={selectFighter}
						filter={filter}
						weightClasses={weightClasses}
						isFavorite={isFavorite}
					/>
				))}
			</div>
		</div>
	);
};

export default Fighters;
