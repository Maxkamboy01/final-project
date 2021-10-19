import React from 'react';
import AddProductImg from '../Assets/Images/fayl.jpg'
import { AddProductWrapper, AddProductTitle, AddProductDiv, AddProductDiv1, AddProductBox, AddProductDiv2, AddProductInput, AddProductInput1, AddProductFayl, AddProductDiv3, AddProductWrapper1, AddProductInputes, AddProductInputBox, AddProductInput5, AddProductInputCategory, AddProductDiv4 } from './style'

function AddProduct() {
    return (
        <AddProductWrapper >
            <div>
                <AddProductTitle>Create a new product</AddProductTitle>
                <AddProductDiv>
                    <p>Dashboard</p>
                    <p>▪ E - Commerce</p>
                    <p className="grey">▪ New porduct</p>
                </AddProductDiv>
            </div>
            <AddProductBox>
                <AddProductDiv1>
                    <AddProductInput type="text" placeholder="Product Name" />
                    <small>Description</small>
                    <div className="line"></div>
                    <AddProductInput1 type="text" placeholder="Write something awesome..."></AddProductInput1>
                    <p><small>Add Images</small></p>
                    <AddProductFayl>
                        <div><img src={AddProductImg} alt="#" /></div>
                        <div>
                            <p>Drop or Select file</p>
                            <small>Drop files here or click <a href="#"> browse</a>thorough your machine</small>
                        </div>
                    </AddProductFayl>
                    <input type="file"/>
                </AddProductDiv1>
                <AddProductDiv2>
                    <AddProductWrapper1>
                        <AddProductDiv3>
                            <div className="icon"><i class="fas fa-toggle-on"></i></div>
                            <p>In stock</p>
                        </AddProductDiv3>
                        <AddProductInputes>
                            <input type="text" placeholder="Product Code" />
                            <input type="text" placeholder="Product SKU" />
                        </AddProductInputes>
                        <p><small>Gender</small></p>
                        <AddProductInput5>
                            <AddProductInputBox>
                                <input type="radio" />
                                <p>Men</p>
                            </AddProductInputBox>
                            <AddProductInputBox>
                                <input type="radio" />
                                <p>Women</p>
                            </AddProductInputBox>
                            <AddProductInputBox>
                                <input type="radio" />
                                <p>Kids</p>
                            </AddProductInputBox>
                        </AddProductInput5>
                        <AddProductDiv4>
                            <p className="category"><small>Category</small></p>
                            <AddProductInputCategory>
                                <input type="text" placeholder="T - shirts" />
                                <div className="icon"><i class="fas fa-chevron-down"></i></div>
                            </AddProductInputCategory>
                        </AddProductDiv4>
                        <AddProductDiv4>
                            <p className="category"><small>Tags</small></p>
                            <AddProductInputCategory>
                                <input type="text" placeholder="Toy Story" />
                                <div className="icon"><i class="fas fa-chevron-down"></i></div>
                            </AddProductInputCategory>
                        </AddProductDiv4>
                    </AddProductWrapper1>
                    <AddProductWrapper1>
                        <AddProductDiv4>
                            <p className="category"><small>Regular Price</small></p>
                            <AddProductInputCategory>
                                <input type="text" placeholder="$ 0.00" />
                            </AddProductInputCategory>
                        </AddProductDiv4>
                        <AddProductDiv4>
                            <p className="category"><small>Sale Price</small></p>
                            <AddProductInputCategory>
                                <input type="text" placeholder="$ 0.00" />
                            </AddProductInputCategory>
                        </AddProductDiv4>
                        <AddProductDiv3>
                            <div className="icon"><i class="fas fa-toggle-on"></i></div>
                            <p>Price includes taxes</p>
                        </AddProductDiv3>
                    </AddProductWrapper1>
                    <button>Create Product</button>
                </AddProductDiv2>
            </AddProductBox>
        </AddProductWrapper>
    )
}

export default AddProduct;
