import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FunctionField, useLocale, useRecordContext } from 'react-admin';
import moment from 'moment';
import 'moment/locale/ar';


const TimeAgoField = ({ source, ...props }) => {
  const classes = useStyles();
  const locale = useLocale();
  const record = useRecordContext();
  const [value, setValue] = useState(record[source]);


  useEffect(() => {
    moment.locale(locale);
    setValue(moment(record[source]).fromNow());
  }, [locale])


  return (
    <FunctionField {...props} render={() => value} />
  );
}


const useStyles = makeStyles(() => ({

}))


TimeAgoField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};


export default TimeAgoField;