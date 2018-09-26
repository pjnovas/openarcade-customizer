import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import flatten from 'flat';
import memoize from 'lodash/memoize';

import * as locales from '/locales';

const Text = ({id, messages}) => <span>{messages[id]}</span>
export const PlainText = ({id, messages}) => messages[id]

Text.propTypes = {
  id: PropTypes.string,
  messages: PropTypes.object
};

export const getTranslations = memoize(locale => flatten(locales[locale]));

export const mapStateToProps = ({intl}) => ({
  messages: getTranslations(intl.current)
});

export default connect(mapStateToProps)(Text);
