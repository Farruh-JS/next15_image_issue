import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex flex-col gap-10'>
			{pitchImages.map(images => (
				<div key={images[0] + 'parent-image'} className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3 text-red-400'>
						With NextImage tag:
						<div className='flex flex-wrap gap-2 border'>
							{images.map(image => (
								<Image
									key={image}
									src={image}
									alt=''
									width={50}
									height={50}
									priority
								/>
							))}
						</div>
					</div>

					<div className='flex flex-col gap-3 text-blue-400'>
						With img tag:
						<div className='flex flex-wrap gap-2 border'>
							{images.map(image => (
								<img key={image} src={image} alt='' width={50} height={50} />
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

const pitchImages = [
	[
		'https://ik.imagekit.io/maydon/149/1.jpg',
		'https://ik.imagekit.io/maydon/149/2.jpg',
		'https://ik.imagekit.io/maydon/149/3.jpg',
		'https://ik.imagekit.io/maydon/149/4.jpg',
		'https://ik.imagekit.io/maydon/149/5.jpg',
		'https://ik.imagekit.io/maydon/149/6.jpg',
		'https://ik.imagekit.io/maydon/149/7.jpg',
		'https://ik.imagekit.io/maydon/149/8.jpg',
		'https://ik.imagekit.io/maydon/149/9.jpg',
		'https://ik.imagekit.io/maydon/149/10.jpg',
	],
	[
		'https://ik.imagekit.io/maydon/general-stadion/1.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/2.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/3.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/4.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/5.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/6.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/7.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/8.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/9.jpg',
		'https://ik.imagekit.io/maydon/general-stadion/10.jpg',
	],
	[
		'https://ik.imagekit.io/maydon/guzal-stadium/1.jpg',
		'https://ik.imagekit.io/maydon/guzal-stadium/2.jpg',
		'https://mp.softly.uz/api/v1/files/1723515139974.g.jpg',
		'https://mp.softly.uz/api/v1/files/1723515142980.g1.jpg',
		'https://mp.softly.uz/api/v1/files/1723515145421.g2.jpg',
	],
	[
		'https://ik.imagekit.io/maydon/248/1.jpg',
		'https://ik.imagekit.io/maydon/248/2.jpg',
		'https://ik.imagekit.io/maydon/248/3.jpg',
		'https://ik.imagekit.io/maydon/248/4.jpg',
		'https://ik.imagekit.io/maydon/248/5.jpg',
		'https://ik.imagekit.io/maydon/248/6.jpg',
		'https://ik.imagekit.io/maydon/248/7.jpg',
		'https://ik.imagekit.io/maydon/248/8.jpg',
		'https://ik.imagekit.io/maydon/248/9.jpg',
		'https://ik.imagekit.io/maydon/248/10.jpg',
	],
	[
		'https://ik.imagekit.io/maydon/27/1.jpg',
		'https://ik.imagekit.io/maydon/27/2.jpg',
		'https://ik.imagekit.io/maydon/27/3.jpg',
		'https://ik.imagekit.io/maydon/27/4.jpg',
		'https://ik.imagekit.io/maydon/27/5.jpg',
		'https://ik.imagekit.io/maydon/27/6.jpg',
		'https://ik.imagekit.io/maydon/27/7.jpg',
		'https://ik.imagekit.io/maydon/27/8.jpg',
	],
	[
		'https://mp.softly.uz/api/v1/files/1722236766454.photo_2024-04-21_02-28-59.jpg',
	],
	[
		'https://mp.softly.uz/api/v1/files/1721546896352.14.2.jpg',
		'https://mp.softly.uz/api/v1/files/1721546910154.14.jpg',
		'https://mp.softly.uz/api/v1/files/1721546907096.14.1.jpg',
	],
	[
		'https://storage.googleapis.com/polebor/site/media/original/ffa6f788-cce9-4c39-8313-6b83d1522217.png',
		'https://storage.googleapis.com/polebor/site/media/original/8c58c58e-862d-4bf5-ae59-595ed03acd19.png',
		'https://storage.googleapis.com/polebor/site/media/original/568a9a7f-0b89-4aff-86b1-b86f30f44c30.png',
		'https://storage.googleapis.com/polebor/site/media/original/0622c9c4-6177-44e0-9ddb-26ac753d8b16.png',
		'https://storage.googleapis.com/polebor/site/media/original/b341f869-1a42-4ee5-b48c-ad3309e79273.png',
	],
	[
		'https://mp.softly.uz/api/v1/files/1723684659651.d1.jpg',
		'https://mp.softly.uz/api/v1/files/1723684652549.d2.jpg',
		'https://mp.softly.uz/api/v1/files/1723684655553.d.jpg',
	],
	[
		'https://mp.softly.uz/api/v1/files/1723214935116.photo_2024-08-09_23-48-06 (2).jpg',
		'https://mp.softly.uz/api/v1/files/1723214931525.photo_2024-08-09_23-48-06 (3).jpg',
		'https://mp.softly.uz/api/v1/files/1723214917107.photo_2024-08-09_23-48-06.jpg',
		'https://mp.softly.uz/api/v1/files/1721477977446.11.1.jpg',
		'https://mp.softly.uz/api/v1/files/1721477974242.11.jpg',
		'https://mp.softly.uz/api/v1/files/1723214929203.photo_2024-08-09_23-28-57.jpg',
		'https://mp.softly.uz/api/v1/files/1723214923115.photo_2024-08-09_23-48-05.jpg',
	],
	[
		'https://mp.softly.uz/api/v1/files/1723684394371.a3.jpg',
		'https://mp.softly.uz/api/v1/files/1723684389968.a1.jpg',
		'https://mp.softly.uz/api/v1/files/1723684387067.a.jpg',
		'https://mp.softly.uz/api/v1/files/1723684382783.a2.jpg',
	],
]
