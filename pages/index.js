import Head from 'next/head'
import Avatar from '../components/Avatar';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid'
import Image from 'next/image';
export default function Home() {
	return (
		<div>
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
			<form>

			</form>
			{/*Footer*/}
    	</div>
	)
}
