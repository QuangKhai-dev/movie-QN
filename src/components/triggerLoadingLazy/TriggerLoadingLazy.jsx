import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { lazyMount, lazyUnMount } from '../../redux/slice/lazySlice';

// import { LOADING_LAZY_MOUNT, LOADING_LAZY_UNMOUNT } from '../../reducers/constants/Lazy';
export default function TriggerLoadingLazy() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lazyMount())
    return () => {
      dispatch(lazyUnMount())
    }
  }, [])
  return <></>
}
