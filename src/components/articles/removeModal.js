import React, { useState } from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../../actions";
import { useHistory } from "react-router-dom";
const RemoveModal = ({ article }) => {
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.error);
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeArticle(id, close, push));
  };

  return (
    <React.Fragment>
      <Modal
        trigger={
          <Button onClick={show}>
            <i class="trash icon"></i>Sil
          </Button>
        }
        basic
        open={open}
        onClose={close}
        size="mini"
      >
        <Header icon="archive" content="Emin misiniz?" />
        <Modal.Content>
          {error ? (
            <p>Hata Oluştu.</p>
          ) : (
            <p>
              <b>{article.title}</b> başlıklı yazıyı silmek istediğinizden emin
              misiniz?.
            </p>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={close}>
            <Icon name="remove" /> Vazgeç
          </Button>
          <Button
            color="green"
            onClick={() => handleDelete(article.id)}
            inverted
          >
            <Icon name="checkmark" /> Sil
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default RemoveModal;
