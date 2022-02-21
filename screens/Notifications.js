import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { DataTable, Title } from 'react-native-paper';
import { db } from '../config/firebase'
import getUSER from '../config/user';
import { useEffect } from 'react/cjs/react.development';
import { firebase } from '../config/firebase'

const Notifications = () => {
    const [notification, setNotification] = useState([
        {},
    ])

    useEffect(() => {
        const ud = getUSER();
        console.log(ud)
        db.collection('AppointmentNotifications')
            .doc(ud)
            .collection('Notifications')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNotification(dis);
            });
    }, [])

    return (
        <View>
            {
                notification.map((notify) => {
                    return (
                        <DataTable>
                            <DataTable.Row>
                                <DataTable.Cell>
                                    <Title>{notify.DrName}</Title>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <Text>{notify.Date}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <Text>{notify.Time}</Text>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    )
                })
            }
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({});
