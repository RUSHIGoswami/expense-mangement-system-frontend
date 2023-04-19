import React, { useState } from "react";
import Modal from "./Modal";

const Friends = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="friends">
      <h3>Friends</h3>
      <ul>
        <li>Friend 1</li>
        <li>Friend 2</li>
        <li>Friend 3</li>
        <li>Friend 4</li>
      </ul>
      <button onClick={() => setModalState(true)}>Add friend</button>
      <Modal open={modalState} onCl />
    </div>
  );
};

export default Friends;
