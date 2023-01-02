import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: "test content",
    author: "",
  });

  function handleChange(event) {
    setFormData((fd) => ({ ...fd, [event.target.id]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let quote = { ...formData, id: uuid() };
    dispatch(addQuote(quote));
    setFormData({
      content: "",
      author: "",
    });
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea name="content" className="form-control" id="content" onChange={handleChange} value={formData.content} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input name="author" className="form-control" type="text" id="author" onChange={handleChange} value={formData.author} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
