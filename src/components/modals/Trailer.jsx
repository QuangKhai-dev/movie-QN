import { Modal } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/modalSlice';
import { store } from '../../redux/store';

const Trailer = () => {
    const { isOpen, urlYoutube } = useSelector(state => state.modalSlice.trailer);
    return (
        <>
            <Modal
                centered
                className='modals'
                open={isOpen}
                onOk={() => store.dispatch(closeModal())}
                onCancel={() => store.dispatch(closeModal())}
                footer={null}
                width={900}
                destroyOnClose={true}
            >
                { isOpen && <iframe width={900} height={600} src={urlYoutube} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />}
            </Modal>
        </>
    );
};

export default Trailer;