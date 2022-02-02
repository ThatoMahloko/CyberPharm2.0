import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DataTable, Title } from 'react-native-paper';

const Notifications = () => {
    return (
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>
                        <Title>Dr Thato Mahloko</Title>
                    </DataTable.Cell>
                    <DataTable.Cell>
                        <Text>18:30 28 Feb</Text>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({});
