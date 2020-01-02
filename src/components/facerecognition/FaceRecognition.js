import React from 'react';
import './facerecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
			<div className='center ma'>
				<div className='absolute ma2'>
					<img id="inputImage" src={imageUrl} alt="pic" width='500px' height='auto'/>
					<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
				</div>
			</div>
		)
}

export default FaceRecognition;