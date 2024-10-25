import Image from 'next/image'

export default function Home() {
	return (
		<div>
			{' '}
			{d.map(images => (
				<div key={images[0] + 'parent'} className='flex flex-wrap'>
					{images.map(i => (
						<img key={i} src={i} alt='' width={50} height={50} />
					))}
				</div>
			))}
		</div>
	)
}
