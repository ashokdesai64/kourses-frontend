import React, { Component } from 'react';

class dawonload_data extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((value, no) =>
                        value.type === "2"  ? (
                            <div class="zip-download">
                                <label class="zip-download_label">Download Zip</label>
                                <a href="https://drive.google.com/uc?export=download&amp;id=<?php echo $pdf[1] ?>" class="btn btn-link zip-download_link"><i class="far fa-file-archive"></i>{value.data_title}.zip </a>
                            </div>
                        ):(
                                <div class="enroll-curri_content scrollbar-inner lecture-curri_content">
                                    {
                                        value.type !== "3" && (
                                            <div class="lecture-pdf">
                                                <iframe id="" title="dawonload" src="https://drive.google.com/file/d/<?php echo $pdf[1] ?>/preview"></iframe>
                                            </div>
                                        )
                                    }
                                        <div class="zip-download">
                                            <label class="zip-download_label">Download PDF</label>
                                            <a href="https://drive.google.com/uc?export=download&amp;id=<?php echo $pdf[1] ?>" class="btn btn-link zip-download_link"><i class="far fa-file-archive"></i>{value.data_title}.pdf</a>
                                        </div>
                                </div>
                        )
                    )
                }
            </React.Fragment>
        );
    }
}

export default dawonload_data;
