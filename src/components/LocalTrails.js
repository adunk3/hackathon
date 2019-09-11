import Card from './Card';
import CardStack from './CardStack';
import React from 'react';
import ReactDOM from 'react-dom';

const LocalTrails = (props) => (
	<div className="scroll">
		<CardStack
			height={2500}
			width={400}
			background="#f8f8f8"
			hoverOffset={25}>

			{props.trails.map((trail, i) =>
				<Card
					key={i}
					background="#8eabbd">
					<TeamMemberCard {...trail} i={i+1} />
				</Card>
			)}

		</CardStack>
	</div>
);


const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid white`,
		}}
		src={imgSrc}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	const renderSummary = () => {
		if (summary) return (
			<p style={{ fontWeight: 300, lineHeight: 1.45 }}>
				{summary}
			</p>
		);
		return null;
	};

	return (
		<div style={styles.detailsRow.row}>
			<span
				className={`icon ${icon}`}
				style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
			/>
			<div style={{ width: '80%' }}>
				<h2 style={styles.detailsRow.title}>
					{title}
				</h2>
				{renderSummary()}
			</div>
		</div>
	);
};

const TeamMemberCard = (props) => (
	<div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
		<header style={styles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={props.imgSqSmall} borderColor="" />
			<div>
				<h1 style={styles.headerName}>{props.i}. {props.name}</h1>
				<h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.length} miles</h3>
			</div>
		</header>

		<div style={{ color: '#fff' }}>
			<DetailsRow
				icon='ion-ios-telephone-outline'
				title=''
			/>
			<DetailsRow
				icon='ion-ios-telephone-outline'
				title='Elevation Gain (ft.)'
				summary={props.ascent}
			/>
			<DetailsRow
				icon='ion-ios-location-outline'
				title='Elevation High (ft.)'
				summary={props.high}
			/>
			<DetailsRow
				icon='ion-ios-location-outline'
				title='Elevation Low (ft.)'
				summary={props.low}
			/>
			<DetailsRow
				icon='ion-ios-location-outline'
				title='Location'
				summary={props.location}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Hike Description'
				summary={props.summary}
			/>
		</div>
	</div>
);

const styles = {
	cardHeader: {
		display: 'flex',
		height: '70px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 18px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};

export default LocalTrails;
