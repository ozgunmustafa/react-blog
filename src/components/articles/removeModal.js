import React, { useState } from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import { api } from "../../api";
const RemoveModal = ({ article, push }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const handleDelete=(id)=>{
      api().delete(`/posts/${id}`)
      .then(response=>{
          setError("");
          close();
          push('/');
      })
      .catch(()=>setError("hata oluştu"))

  }

  return (
    <React.Fragment>
      <Modal
        trigger={
          <Button color="red" onClick={show}>
            Sil
          </Button>
        }
        basic
        open={open}
        onClose={close}
        size="mini"
      >
        <Header icon="archive" content="Emin misiniz?" />
        <Modal.Content>
         
          {error ? <p>Hata Oluştu.</p>: <p><b>{article.title}</b> başlıklı yazıyı silmek istediğinizden emin misiniz?.</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={close}>
            <Icon name="remove" /> Vazgeç
          </Button>
          <Button color="green" onClick={()=>handleDelete(article.id)} inverted>
            <Icon name="checkmark" /> Sil
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default RemoveModal;
