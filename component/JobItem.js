import { View, Text, Image, StyleSheet } from "react-native";
import { memo } from "react";

const JobItem = memo(({ job }) => (
  <View style={styles.jobItem}>
    <Image source={job.logo} style={styles.jobLogo} />
    <View style={styles.jobInfo}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.company}</Text>
    </View>
    <View>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
));

const styles = StyleSheet.create({
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 74,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  jobLogo: {
    width: 40,
    height: 40,
    // borderRadius: 20,
    marginRight: 15,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    lineHeight: 19.2
  },
  jobCompany: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20.8

  },
  jobSalary: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-end',
    color: '#0D0D26',
    marginBottom: 3,
    lineHeight: 19.2
  },
  jobLocation: {
    fontSize: 14,
    color: '#0D0D26',
    lineHeight: 20.8
  },
});

export default JobItem;