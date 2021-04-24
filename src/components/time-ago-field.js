import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useLocale, useRecordContext } from 'react-admin';
import moment from 'moment';
import 'moment/locale/ar';


const TimeAgoField = ({ source, ...props }) => {
  const classes = useStyles();
  const record = useRecordContext(props);
  const [dateTime, setDateTime] = useState(null);
  const [format, setFormat] = useState(0);
  const locale = useLocale();


  const toggleFormat = () => {
    const f = format === 1 ? 0 : format+1;
    setFormat(f);
  }

  useEffect(() => {

    moment.locale(locale);
    const d = moment(record[source]);
    setDateTime(d);

  }, [locale, record, source])


  return (
    <span
      {...props}
      className={classes.field}
      onClick={toggleFormat}
    >
      {
        [
          moment(dateTime).fromNow(),
          moment(dateTime).format('ll - h:m a'),
        ]
        [format]
      }
    </span>
  );
}


const useStyles = makeStyles(() => ({
  field: {
    cursor: 'pointer',
  }
}))


TimeAgoField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};


export default TimeAgoField;