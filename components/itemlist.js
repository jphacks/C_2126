import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Card, Input, Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


function ItemListScroll(props) {
	return (
		<ScrollView>
			{user.map((u, i) => {
				return (
					<ListItem key={i} bottomDivider>
						<View
							style={{
								flexDirection: "column",
								flex: 1,
								height: 100,
								padding: 10,
							}}
						>
							<View style={{
								flex: 0.4,
								flexDirection: "row"
							}}>
								<View style={{ flex: 0.55 }}>
									<Text h4 >{u.itemName}</Text>
								</View>
								<View style={{ flex: 0.2 }}>
									<Text h4 >{u.category}</Text>
								</View>
								<View style={{ flex: 0.25 }}>
									<Text h3>{u.count}</Text>
								</View>

							</View>
							<View style={{ flex: 0.2 }}>
								<Text style={{ flex: 1 }}>{u.expiryDate}</Text>
							</View>
						</View>

					</ListItem>
				);
			})
			}
		</ScrollView>
	)

}


const styles = ({
	container: {
		marginTop: 30,
		marginBottom: 30,
		flex: 1,
	},
	cardContent: {
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'space-between',
		flex: 1,
	},
	card: {
		flex: 1,
	},
	card_back: {
		flex: 1,

	},
	categoryPicker: { height: '20%' },
	datePicker: { alignSelf: 'center', width: '40%' },
});
