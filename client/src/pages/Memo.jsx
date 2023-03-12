import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import memoApi from "../api/memoApi";
import { useDispatch, useSelector } from "react-redux";
import { setMemo } from "../redux/features/memoSlice";

function Memo() {
  const { memoId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memos = useSelector((state) => state.memo.value);

  useEffect(() => {
    const getMemo = async () => {
      try {
        const res = await memoApi.getOne(memoId);
        setTitle(res.title);
        setDescription(res.description);
      } catch (error) {
        alert(error);
      }
    };
    getMemo();
  }, [memoId]);

  let timer;

  const timerRef = useRef(null);
  const timeout = 500;

  const updateTitle = async (e) => {
    clearTimeout(timerRef.current);
    const newTitle = e.target.value;
    setTitle(newTitle);

    timerRef.current = setTimeout(async () => {
      try {
        const res = await memoApi.update(memoId, { title });
        console.log(res);
        setTitle(title);
      } catch (error) {
        alert(error);
      }
    }, timeout);
  };

  const updateDescription = async (e) => {
    clearTimeout(timer);
    const newDescription = e.target.value;
    setDescription(newDescription);

    timer = setTimeout(async () => {
      try {
        const res = await memoApi.update(memoId, {
          description: newDescription,
        });
      } catch (error) {
        alert(error);
      }
    }, timeout);
  };

  const deleteMemo = async () => {
    try {
      const deleteMemo = await memoApi.delete(memoId);

      const newMemo = memos.filter((e) => e._id !== memoId);
      dispatch(setMemo(newMemo));

      if (newMemo.length === 0) {
        navigate("/memo");
      } else {
        navigate(`/memo/${newMemo[0]._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton variant="outlined" color="error" onClick={deleteMemo}>
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "10px 50px" }}>
        <TextField
          onChange={updateTitle}
          value={title}
          placeholder="無題"
          variant="outlined"
          fullWidth
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "2rem", fontWeight: "700" },
          }}
        />
        <TextField
          onChange={updateDescription}
          value={description}
          placeholder="追加"
          variant="outlined"
          fullWidth
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "1rem" },
          }}
        />
      </Box>
    </>
  );
}

export default Memo;
