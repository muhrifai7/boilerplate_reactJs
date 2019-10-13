import React from 'react';

import './FollowMe.css'

const FollowMe = ()=> {
    return (
<div className="Container">
    <div class="ui vertically divided grid">
        <div class="four column row">
            <div class="column">
            <p></p>
            </div>

            <div class="column">
            <h3>Tanya-tanya</h3>
            <div class="ui link list">
                <a class="item">About</a>
                <a class="item">Jobs</a>
                <a class="item">Team</a>
                </div>
            </div>

            <div class="column">
            <h3>Lainya</h3>
                <div class="ui link list">
                <a class="item">About</a>
                <a class="item">Jobs</a>
                <a class="item">Team</a>
                </div>
            </div>

            <div class="column">
            <h3>Ikuti kami di </h3>
                <button class="ui circular facebook icon button">
                    <i class="facebook icon"></i>
                </button>
                <button class="ui circular twitter icon button">
                    <i class="twitter icon"></i>
                </button>
                <button class="ui circular linkedin icon button">
                    <i class="linkedin icon"></i>
                </button>
                <button class="ui circular google plus icon button">
                    <i class="google plus icon"></i>
                </button>
            </div>
        </div>
    </div>
</div>
    )
}
export default FollowMe