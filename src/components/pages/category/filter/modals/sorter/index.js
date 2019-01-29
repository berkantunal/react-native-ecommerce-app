import React from 'react'
import PropTypes from 'prop-types'
import { Text, List, ListItem } from 'native-base'
import { Modal } from '~/components/ui/'

import styles from "./styles";

const ModalSorter = props => {
  
  const { 
    visibility,
    closeEvent 
  } = props

  return (
    <Modal 
      visibility={visibility} 
      title="Sıralama"
      closeEvent={closeEvent}
    >
      <List style={styles.modalList}>
        <ListItem>
          <Text>Çok Satanlar</Text>
        </ListItem>
        <ListItem>
          <Text>En Yeniler</Text>
        </ListItem>
        <ListItem>
          <Text>En Düşük Fiyat</Text>
        </ListItem>
        <ListItem noBorder>
          <Text>En Yüksek Fiyat</Text>
        </ListItem>
      </List>
    </Modal>
  )
}

ModalSorter.propTypes = {
  closeEvent: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired
}

ModalSorter.defaultProps = {
  visibility: false
}

export default ModalSorter
