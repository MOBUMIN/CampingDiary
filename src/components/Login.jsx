import { useState, useRef } from 'react'
import { LogoIcon } from '_icons';
import useOutsideClick from '_hooks/useOutsideClick';

const Login = () => {
	const modalRef = useRef(null);
	const [open, setOpen] = useState(false)
	const getOpen = () => open ? 'visible' : 'invisible';
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);
	useOutsideClick(modalRef, closeModal, open);

	return (
		<div className="relative">
			<button onClick={openModal}>로그인</button>
			<div ref={modalRef} className={`absolute top-10 right-0 flex flex-col gap-8 items-center justify-center p-16 h-[25rem] w-[27rem] rounded-lg bg-white z-10 ${getOpen()}`}>
				<LogoIcon className="text-gray-900 mx-auto h-8 w-auto" />
				<form className="w-full max-w-md flex flex-col gap-5" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm flex flex-col gap-2">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
								기억하기
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#2494ab] py-2 px-4 text-sm font-medium text-white hover:bg-[#196e7f] focus:outline-none"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
};

export default Login;
