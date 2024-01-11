import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

function AccountDelete(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => 
    setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Hesabımı Sil
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalBody>
                    Hesabınızı silmek istediğinize emin misiniz?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Sil
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AccountDelete;