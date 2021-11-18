import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';
import RecordPageView from "../../components/RecordPageView";

class PageNotFound extends PureComponent {
    render() {
        return (
            <Container>
                {/* Record Page view of current page */}
                <RecordPageView IdeaId="0" />
                <div className="page-header">404 PageNotFoundFound</div>
            </Container>
        );
    }
}
/// Mapping the redux state with component's properties
const mapStateToProps = (state) => {
    return {
    }
};
/// Map actions (which may include dispatch to redux store) to component
const mapDispatchToProps = {
}
/// Redux Connection before exporting the component
export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(mapDispatchToProps, dispatch)
)(PageNotFound);
