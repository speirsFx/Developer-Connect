import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem'


const Profiles = ({getProfiles, profile: {profiles, loading}}) => {

    useEffect(() => {
        getProfiles()
    }, [getProfiles])

    return (
        <Fragment>
        {loading ? <Spinner /> :
            <Fragment>
                <p className="large text-primary">Developers</p>
                <p>
                    <i className="fab fa-connectdevelop"></i>{' '}
                    Browse and Connect with developers 
                </p>
                <br />
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                    ))
                ) :
                (<h4>No Profile found!</h4>)}
            </Fragment>
        } 
    </Fragment>
    )}

Profiles.propTypes = {
 getProfiles: PropTypes.func.isRequired,
 profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)
