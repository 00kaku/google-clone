import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import Image from 'next/image';
export default function Home() {
	return (
		<div className="flex flex-col
		justify-center h-screen">
			<Head>
				<title>Google Clone</title>
			</Head>

			{/*Header*/}
			<header className="flex w-full p-5
			justify-between text-sm text-gray-700">
				{/* Left*/}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>

				{/* Right*/}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full
					hover:bg-gray-100 cursor-pointer"/>
					<Avatar url="https://www.w3schools.com/howto/img_avatar.png"/>
				</div>

			</header>

			{/*Body*/}
			<form className="flex flex-col items-center
			mt-44 flex-grow w=4/5">
				<Image
				src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
				height= {100}
				width= {300}
				/>
				<div className="flex w-full nt-5
				hover:shadow-lg focus-within:shadow-lg
				max-w-md rounded-full border-gray-200
				px-5 py-3 items-center
				sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3
					text-gray-500" />
					<input type="text"
					className="focus:outline-none flex-grow" />
					<MicrophoneIcon className="h-5 ml-3
					text-gray-500" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2
				justify-center mt-8
				sm:space-y-0 sm:flex-row sm:space-x-4 ">
					<button className="btn">Google search </button>

					<button className="btn">I'm feeling Lucky </button>
				</div>
			</form>
			{/*Footer*/}
			<Footer />
    	</div>
	)
}
