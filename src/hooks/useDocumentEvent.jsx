import { useEffect } from 'react';

function useDocumentEvent(type, listener, options) {
	useEffect(() => {
		document.addEventListener(type, listener, options);

		return () => document.removeEventListener(type, listener, options);
	})
}

export default useDocumentEvent;
