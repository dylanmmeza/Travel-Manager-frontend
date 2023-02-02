let DJANGO_API_BASE_PATH;

if (__NODE__) {
    DJANGO_API_BASE_PATH = 'http://127.0.0.1:8000';
}

const djangoBackendSpecs = {
    name: 'django backend',
    basePath: DJANGO_API_BASE_PATH,
    endpoints: [
        'trips/my_trips',
        'trips/joined_trips',
        'trips/pending_trips',
        'trips/trip_details',
        'trips/update_trip',
        'trips/create_unplanned_trip',
        'trips/create_planned_trip',
        'trips/get_destinations',
        'trips/add_destination',
        'trips/remove_destination',
        'trips/delete_trip'
    ],
};

export default djangoBackendSpecs;