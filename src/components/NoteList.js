import React, { Component } from 'react'

export default class NoteList extends Component {
    render() {
        return (
            <div className="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="section1HeaderId">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                      Section 1
                    </a>
                        </h5>
                    </div>
                    <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                        <div className="card-body">
                            Section 1 content
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="section2HeaderId">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                      Section 2
                    </a>
                        </h5>
                    </div>
                    <div id="section2ContentId" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                        <div className="card-body">
                            Section 2 content
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
