import { Fragment, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Dialog, Transition } from '@headlessui/react'
import tags from 'src/constants/tag';

const tagStyle = {
  "easyToReserve": "bg-emerald-100",
  "noCarSleep": "bg-stone-400",
}

export default function DiaryModal({diary, onClose}) {
  console.log(diary);

  const cancelButtonRef = useRef(null);

  return (
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} open={true} onClose={onClose}>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h2" className="text-4xl font-semibold leading-6 text-gray-900 font-['dandan'] mb-4">
                        {diary?.place_name}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-2xl text-gray-500 font-['dandan']">
                          {diary.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 flex sm:px-6 gap-2">
                  {
                    diary.custom_tag.map(tag => <span key={tag} className={`py-0.5 px-3 text-xl text-gray-600 font-['dandan'] rounded-xl ${tagStyle[tag]}`}>{tags[tag]}</span>)
                  }
                </div>
              </Dialog.Panel>
          </div>
        </div>
      </Dialog>
  )
}