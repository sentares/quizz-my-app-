import './resultGame.scss'

export const ResultGame = ({ correctlyApp }) => {
	return (
		<div className='resultWrapper'>
			<img
				src='https://media.giphy.com/media/THgpQqlwPseLk1w2pB/giphy.gif'
				alt='Done'
			/>
			<h3>
				Вы ответили првильно на{' '}
				<strong style={{ color: 'rgb(65, 230, 40)' }}>{correctlyApp}</strong> из{' '}
				<strong>4</strong> вопросов
			</h3>
			<button>
				<a href='/'>Играть</a>
			</button>
		</div>
	)
}
