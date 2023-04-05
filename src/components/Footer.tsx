import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
	return (
		<div className="py-5 text-center border-t border-b border-gradient max-w-5xl mx-auto w-full mb-2 mt-4">
				<div className="container max-w-screen-lg mx-auto">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
              <a href="https://www.linkedin.com/in/tomas-gil-amoedo/">
              <Icon icon="mdi:linkedin" color="#ff6700" className='w-10 h-10' />
              </a>
              <a href="https://github.com/Tommydemian">
              <Icon icon="mdi:github" color="#ff6700" className='w-10 h-10' />
              </a>
							
						</div>
					</div>
				</div>
			<p className="text-sm mt-2 opacity-50">
				&copy; {new Date().getFullYear()} Tomas Gil Amoedo. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;