import useDocumentEvent from "./useDocumentEvent";

function useOutsideClick(target, cb, enabled) {
	const targetDom = target.current ?? target;
	useDocumentEvent('click', (event) => {
		if(!enabled) return;
		if(!targetDom?.contains(event.target)) cb();
	})
}

export default useOutsideClick;
